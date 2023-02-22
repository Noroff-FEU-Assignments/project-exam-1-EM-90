export const Initialize = async (
  GetDataContent,
  AddDataContentToHtml,
  amountOfPosts
) => {
  const data = await GetDataContent(amountOfPosts);
  AddDataContentToHtml(data);
};
