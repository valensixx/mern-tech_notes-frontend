import React from "react"
import { useState, useEffect } from "react"
import { useAddNewUserMutation } from "./notesApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { ROLES } from "../../config/roles"

const NewNote = () => {
  return (
    <div>NewNote</div>
  )
}

export default NewNote