type URLS = typeof URLs;
const URLs = {
  facebook: "https://www.facebook.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/channel/",
};

export const convertSnsUrl = (user: any) => {
  const { facebook, twitter, instagram, youtube } = user;

  Object.entries({ facebook, twitter, instagram, youtube }).map((key) => {
    if (!key[1]) {
    }
    const valueName = key[0];
    user[valueName] = URLs[valueName as keyof URLS] + key[1];
  });
};
