// replace
export const formReplace = (data: any) => {
  const { id, name, url } = data;

  const video = {
    id: id || undefined,
    name: name || undefined,
    url,
  };
  return video;
};
