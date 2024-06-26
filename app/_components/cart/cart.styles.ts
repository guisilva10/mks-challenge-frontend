import Colors from '@/theme/theme.colors'
import styled from 'styled-components'

interface CartContainerPros {
  isVisible: boolean
}

export const CartContainer = styled.div<CartContainerPros>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: all 0.3s ease;
  p {
    color: #fff;
  }
`

export const CartEscapeArea = styled.div`
  width: 100%;
`

export const CartContent = styled.div`
  background-color: ${Colors.primary};
  height: 100vh;
  min-width: 500px;
  z-index: 200;
  padding: 20px;
  overflow-y: scroll;
`
export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: white;
`
export const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
  color: white;
`

export const ButtonFinish = styled.button`
    width: 100%;
    height: 97px;
    top: 771px;
    left: -47px;
    gap: 0px;
    opacity: 0px;
    color: white;
    background-color: #000;

`