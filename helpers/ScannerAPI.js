export const GetDetailAssetViaScan = async (data) => {
  try {
    const response = await axios({
      method: "get",
      url: `/GetDetailAssetViaScan/${data.faNo}/${data.opnameId}`,
      headers: getHeaders(store.getState().auth.token),
    });
    return response;
  } catch (error) {
    return error.response;
  }
};




