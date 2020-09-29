const youtube = "https://www.youtube.com/embed/";

// index
export const convertArrayVideoDataToClient = (data: any[]) => {
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
export const convertVideoDataToServer = (data: any) => {
  const { id, name, url } = data;

  const video = {
    id: id || undefined,
    name: name || undefined,
    url,
  };
  return video;
};
// replace
export const convertVideoDataToClient = (data: any) => {
  const { newVideo, newUserVideos } = data;
  const { userId } = newUserVideos;
  const { id, name, url } = newVideo;
  const video = {
    id,
    userId,
    name,
    url: youtube + url,
  };
  return video;
};

// create

export const convertCreateVideoDataToClient = async (data: any) => {
  const { newVideo, newUserVideos } = data;
  const { userId } = newUserVideos;
  const { id, name, url } = newVideo;

  const video = {
    id,
    name,
    userId,
    url: youtube + url,
  };
  return video;
};
