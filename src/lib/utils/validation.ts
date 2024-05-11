export const validateData = (schema: any, data: any) => {
  const validationResult = schema.safeParse(data);
  if (!validationResult.success)
    throw new Error(`Not valid data (schema): ${validationResult.error}`);
};
