import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import { HomeCoinBalanceCell } from 'components/Balances'

const Success = props => {
  const { balance } = props

  const Wrapper = styled.div``

  return (
    <LinkContainer to='/lockbox'>
      <Wrapper>
        <HomeCoinBalanceCell
          coin='BTC'
          coinName='Bitcoin'
          coinIcon='btc'
          balance={balance}
        />
      </Wrapper>
    </LinkContainer>
  )
}

Success.propTypes = {
  balance: PropTypes.number.isRequired
}

export default Success