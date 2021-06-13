export const LoadObjectToLocalStorage = (
  Object: any,
  LocalStorageName: string
) => {
  localStorage.setItem(LocalStorageName, Object);
};

export const GetObjectFromLocalStorage = (localStorageName: string) => {
  return JSON.parse(localStorage.getItem(localStorageName) ?? "");
};

export const GetStringFromLocalStorage = (localStorageName: string) => {
  return localStorage.getItem(localStorageName) ?? "";
};
