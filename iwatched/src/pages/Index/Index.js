import React, {
  useContext,
} from 'react'
import { BasePage } from 'components/UI/UIPages/Pages'
import StoreContext from 'components/Store/Context'
import WelcomeDiv from 'components/WelcomeDiv/WelcomeDiv'

const Index = () => {
  const {token} = useContext(StoreContext)

  return (
    <BasePage>
      <WelcomeDiv token={token}/>
    </BasePage>
  )
}

export default Index