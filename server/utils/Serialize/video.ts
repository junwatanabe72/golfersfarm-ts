// server=>client型に変換

// index
export const serializeIndex = (datas: any[]) => {
  const AllVideos = datas.map((data: any) => {
    const { Video, userId } = data;
    const { dataValues } = Video;
    const video = {
      ...dataValues,
      userId,
    };
    return video;
  });
  return AllVideos;
};

// replace
export const serializeReplace = (data: any) => {
  const { newVideo, newUserVideos } = data;
  const { userId } = newUserVideos;
  const { dataValues } = newVideo;
  const video = {
    ...dataValues,
    userId,
  };
  return video;
};
