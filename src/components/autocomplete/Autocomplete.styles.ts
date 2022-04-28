import { css } from '@emotion/react'

export const annotate = css({})

export const comboboxList = css({
  position: 'relative',
})

export const group = (isInputFocused: boolean) =>
  css({
    '&:hover': {
      borderColor: isInputFocused ? 'rgb(25,118,210)' : 'black',
    },
    boxSizing: 'border-box',
    border: isInputFocused
      ? '2px solid rgb(25,118,210)'
      : '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '5px',
    display: 'flex',
    height: '56px',
    alignItems: 'center',
    width: '300px',
  })

export const label = (isInputFocused: boolean, inputHasValue: boolean) =>
  css({
    '& > *': {
      fontSize: isInputFocused || inputHasValue ? '0.8rem' : '1rem',
      color: isInputFocused ? 'rgb(25,118,210)' : 'rgba(0, 0, 0, 0.6)',
      padding: '0 0.5rem',
      margin: 0,
      lineHeight: '1rem',
      transition: 'font-size 200ms ease-in',
    },
    position: 'absolute',
    left: isInputFocused || inputHasValue ? '6px' : '9px',
    top: isInputFocused || inputHasValue ? 0 : '50%',
    transition: 'top 200ms ease-in, left 200ms ease-in',
    transform: 'translateY(-50%)',
    background: 'white',
  })

export const button = (isInputFocused: boolean) =>
  css({
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
    width: '28px',
    height: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    borderRadius: '50%',
    marginRight: isInputFocused ? '8px' : '9px',
    backgroundColor: 'transparent',
    transition: 'background 400ms',
  })

export const input = css({
  '&:focus': {
    outline: 'none',
  },
  border: 'none',
  flex: 1,
  margin: '9px 39px 9px 9px',
  color: '#1A2027',
  fontSize: '1rem',
})

export const list = (isInputFocused: boolean) =>
  css({
    position: 'absolute',
    boxSizing: 'border-box',
    maxWidth: '300px',
    borderRadius: '5px',
    overflowY: 'auto',
    maxHeight: '450px',
    margin: '0',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    display: isInputFocused ? 'block' : 'none',
    listStyleType: 'none',
    paddingLeft: 0,
    backgroundColor: 'white',
    zIndex: '1000',
  })

export const option = (isHighlighted: boolean) =>
  css({
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
    cursor: 'pointer',
    padding: '16px 0 16px 9px',
    backgroundColor: isHighlighted ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
  })
