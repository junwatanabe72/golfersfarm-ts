// index
export const serializeIndex = (data: any[]) => {
  const AllVideos = data.map((value: any) => {
    const { Video, userId } = value;
    const { id, name, url } = Video;
    const video = {
      id,
      userId,
      name,
      url,
    };
    return video;
  });
  return AllVideos;
};

// replace
export const serializeReplace = (data: any) => {
  const { newVideo, newUserVideos } = data;
  const { userId } = newUserVideos;
  const { id, name, url } = newVideo;
  const video = {
    id,
    userId,
    name,
    url,
  };
  return video;
};
