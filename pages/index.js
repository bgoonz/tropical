import React from 'react'
import { Helmet } from 'react-helmet-async'
import withIsland from '../components/with_island/with_island'
import ExampleComponent from '../components/example_component/example_component'

const ExampleComponentIsland = withIsland(ExampleComponent, {
  islandTag: 'header'
})

export default function IndexPage () {
  return (
    <>
      <Helmet>
        <title>Your San Blas site is ready</title>
      </Helmet>

      <ExampleComponentIsland alertMessage='An yeel itoe' />
    </>
  )
}
