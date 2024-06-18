"use client"
import React from 'react';
import { useForm, useFieldArray, Controller, SubmitHandler } from 'react-hook-form';

interface IColor {
  color: string;
}

interface ISize {
  size: string;
  colors: IColor[];
}

interface IFormInput {
  sizes: ISize[];
}

const MyForm: React.FC = () => {
  const { register, control, handleSubmit, getValues, setValue } = useForm<IFormInput>({
    defaultValues: {
      sizes: [{ size: '', colors: [{ color: '' }] }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sizes',
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  // Function to toggle size selection
  const toggleSizeSelection = (index: number) => {
    const currentSizes = getValues('sizes');
    if (currentSizes[index].size) {
      remove(index); // Remove size if it exists
    } else {
      append({ size: '', colors: [{ color: '' }] }); // Add size if it doesn't exist
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-24'>
      {fields.map((sizeField, index) => (
        <div key={sizeField.id}>
          <input {...register(`sizes.${index}.size` as const)} placeholder="Size" />
          
          {sizeField.colors.map((color, colorIndex) => (
            <Controller
              key={colorIndex}
              control={control}
              name={`sizes.${index}.colors.${colorIndex}.color` as const}
              render={({ field }) => (
                <input {...field} placeholder="Color" />
              )}
            />
          ))}

          {/* Checkbox for adding/removing the size */}
          <label htmlFor="check"></label>
          <input
            type="checkbox"
            title='check'
            checked={!!sizeField.size}
            onChange={() => toggleSizeSelection(index)}
          />

          <button type="button" onClick={() => remove(index)}>
            Remove Size
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ size: '', colors: [{ color: '' }] })}>
        Add Size
      </button>
      <input type="submit" />
    </form>
  );
};

export default MyForm;

