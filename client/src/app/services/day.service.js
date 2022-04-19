import httpService from './http.service';

const dayEndPoint = 'day/';

const DayService = {
  fetchAll: async () => {
    const { data } = await httpService.get(dayEndPoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.post(dayEndPoint, payload);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      dayEndPoint + payload._id,
      payload
    );
    return data;
  },
  delete: async (payload) => {
    const { data } = await httpService.delete(dayEndPoint + payload);
    return data;
  }
};

export default DayService;
