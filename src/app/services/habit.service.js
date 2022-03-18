import httpService from './http.service';

const habitEndPoint = 'habit/';

const habitService = {
  createHabit: async (payload) => {
    const { data } = await httpService.put(
      habitEndPoint + payload._id,
      payload
    );
    return data;
  },
  updateHabit: async (payload) => {
    const { data } = await httpService.patch(
      habitEndPoint + payload._id,
      payload
    );
    return data;
  },
  deleteHabit: async (payload) => {
    const { data } = await httpService.delete(habitEndPoint + payload._id);
    return data;
  }
};

export default habitService;
