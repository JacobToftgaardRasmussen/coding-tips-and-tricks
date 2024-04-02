import React from "react"

type FormData = {
  firstName: string
  birthday: string
  age: number
  country: string
  pets: string
  occupation: string
  favoriteColor: string
  maritalStatus: string
  educationLevel: string
  hasCar: boolean
}
export default function Form() {
  return (
    <form action={(formData: FormData) => console.log(formData)}>
      <input type="text" />
    </form>
  )
}
