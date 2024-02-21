"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
import { ZodError, z } from 'zod';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// Form ZOD Schema
const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
      invalid_type_error: 'Please select a customer.',
    }),
    amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
    status: z.enum(['pending', 'paid'], {
      invalid_type_error: 'Please select an invoice status.',
    }),
    date: z.string(),
});

// Removing id from schema
const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });


// This is temporary until @types/react-dom is updated
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};


export async function createInvoice(prevState: State, formData: FormData) {
    const validatedFields = CreateInvoice.safeParse({
    // const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    // console.log(validatedFields?.error);
    // If form validation fails, return errors early. Otherwise, continue.
    // console.log("SEEEEEEEEEEEE", validatedFields.error.flatten());
// console.log(validatedFields.error.flatten);

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Invoice.',
        custom: validatedFields.error.flatten(),
      };
    }


    // Prepare data for insertion into the database
    const { customerId, amount, status } = validatedFields.data;
  
  
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];
    try {
        await sql`
          INSERT INTO invoices (customer_id, amount, status, date)
          VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;
      } catch (error) {
        return {
          message: 'Database Error: Failed to Create Invoice.',
        };
    }

    // console.log(formData);
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
    // const rawFormData = Object.fromEntries(formData.entries())
    // Test it out:
}

export async function updateInvoice(id: string, prevState: State, formData: FormData) {
    const validatedFields = UpdateInvoice.safeParse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });

    if (!validatedFields.success) {
        const errorMap = validatedFields.error.flatten().fieldErrors;
        return {
          message: "error",
          errors: {
            customerId: errorMap["customerId"]?.[0] ?? "",
            amount: errorMap["amount"]?.[0] ?? "",
            status: errorMap["status"]?.[0] ?? "",
          },
          // fieldValues: {
          //   customerId, amount, status
          // }
        }
    }

    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100; 
   
    try {
        await sql`
            UPDATE invoices
            SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
            WHERE id = ${id}
          `;
      } catch (error) {
        return { message: 'Database Error: Failed to Update Invoice.' };
      }
   
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }
  

export async function deleteInvoice(id: string) {
    // throw new Error('Failed to Delete Invoice');

    try {
      // await new Promise((resolve) => setTimeout(resolve, 10000));
        await sql`DELETE FROM invoices WHERE id = ${id}`;
        revalidatePath('/dashboard/invoices');  
      } catch (error) {
        throw new Error('Database Error: Failed to Delete Invoice.');
        // return { message: 'Database Error: Failed to Delete Invoice.' };
      }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}