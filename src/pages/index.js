import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Hello from gatsby</h1>
        <ExampleButton>click me</ExampleButton>
      </div>
    </Layout>
  )
}
