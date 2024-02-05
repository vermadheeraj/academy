import React, { useState } from "react"
import { Link } from "react-router-dom"
import BlogHome from "./BlogHome"

import Back from "../common/back/Back3"

const blog = () => {
  return (
  <>
  <Back title='Explore Courses' />
  <BlogHome />
  </>
  )
}

export default blog
