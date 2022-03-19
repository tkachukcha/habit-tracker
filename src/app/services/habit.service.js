import httpService from './http.service';

const habitEndPoint = 'habit/';

const habitService = {
  create: async (payload) => {
    const { data } = await httpService.put(
      habitEndPoint + payload._id,
      payload
    );
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      habitEndPoint + payload._id,
      payload
    );
    return data;
  },
  delete: async (payload) => {
    const { data } = await httpService.delete(habitEndPoint + payload._id);
    return data;
  }
};

export default habitService;
