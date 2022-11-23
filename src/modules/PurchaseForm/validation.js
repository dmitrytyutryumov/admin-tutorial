import * as Yup from 'yup'

export const validationSchema = Yup.object({
  jan: Yup.number().required(),
  feb: Yup.number().required(),
  mar: Yup.number().required(),
  apr: Yup.number().required(),
  may: Yup.number().required(),
  jun: Yup.number().required(),
  jul: Yup.number().required(),
  aug: Yup.number().required(),
  sep: Yup.number().required(),
  oct: Yup.number().required(),
  nov: Yup.number().required(),
  dec: Yup.number().required(),
  language: Yup.string().required(),
  name: Yup.string().required(),
  gameName: Yup.string().required(),
  rating: Yup.number().required(),
  bankBalance: Yup.number().required(),
  bought: Yup.bool().required(),
  totalWinnings: Yup.number().required(),
})
