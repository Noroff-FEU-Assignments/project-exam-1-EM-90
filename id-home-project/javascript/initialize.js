const Initialize = async () => {
  const data = await GetDataContent(amountOfPosts);
  AddDataContentToHtml(data);
};
