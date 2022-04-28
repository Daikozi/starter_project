import { RefObject, SetStateAction, useRef, VFC } from 'react'
import { Typography } from '../typography'
import * as styles from './Autocomplete.styles'

type AutocompleteOptionProps = {
  index: number
  highlightedOptionIndex: number
  option: string
  inputRef: RefObject<HTMLInputElement>
  setInputValue: (value: SetStateAction<string>) => void
  setIsDropDownOpen: (value: SetStateAction<boolean>) => void
}

export const AutocompleteOption: VFC<AutocompleteOptionProps> = ({
  index,
  highlightedOptionIndex,
  option,
  inputRef,
  setInputValue,
  setIsDropDownOpen,
  ...rest
}) => {
  const optionRef = useRef<HTMLLIElement>(null)

  const scrollToHighlightedElement = () => {
    const optionPosition = optionRef.current?.offsetTop ?? 0
    const optionHeight = optionRef.current?.clientHeight ?? 0
    const listHeight = optionRef.current?.parentElement?.clientHeight ?? 0

    if (optionPosition + optionHeight > listHeight) {
      optionRef.current?.parentElement?.scrollTo(
        0,
        optionPosition + optionHeight - listHeight
      )
    } else {
      optionRef.current?.parentElement?.scrollTo(0, 0)
    }
  }

  highlightedOptionIndex === index && scrollToHighlightedElement()

  return (
    <li
      css={styles.option(highlightedOptionIndex === index)}
      id={`lb1-${option}`}
      role="option"
      aria-selected={highlightedOptionIndex === index}
      onClickCapture={() => {
        inputRef.current?.focus()
        setInputValue(option)
        setIsDropDownOpen(false)
      }}
      ref={optionRef}
      {...rest}
    >
      <Typography component="span">{option}</Typography>
    </li>
  )
}
