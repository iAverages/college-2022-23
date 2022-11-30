import { useForm as useReactForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ZodSchema } from 'zod';

import type { FieldValues, UseFormProps } from 'react-hook-form';

// export declare function useForm<TFieldValues extends FieldValues = FieldValues, TContext = any>(props?: UseFormProps<TFieldValues, TContext>): UseFormReturn<TFieldValues, TContext>;
const useForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(schema: ZodSchema, ...props: UseFormProps<TFieldValues, TContext>[]) => {
    return useReactForm({
        ...props,
        resolver: zodResolver(schema),
      });
}

export default useForm;