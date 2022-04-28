import { Dispatch, FC, RefObject, SetStateAction } from 'react'
import { createPortal } from 'react-dom'
import * as styles from './Autocomplete.styles'
import { AutocompleteOption } from './AutocompleteOption'
import { usePosition } from './usePosition'

type AutocompleteListProps = {
  isDropDownOpen: boolean
  listboxRef: RefObject<HTMLUListElement>
  options: string[]
  highlightedOptionIndex: number
  inputRef: RefObject<HTMLInputElement>
  setInputValue: Dispatch<SetStateAction<string>>
  inputValue: string
  setIsDropDownOpen: Dispatch<SetStateAction<boolean>>
  groupRef: RefObject<HTMLDivElement>
}

export const AutcompleteList: FC<AutocompleteListProps> = ({
  isDropDownOpen,
  listboxRef,
  options,
  highlightedOptionIndex,
  inputRef,
  setInputValue,
  inputValue,
  setIsDropDownOpen,
  groupRef,
}) => {
  const { listStyle } = usePosition(groupRef, listboxRef, inputValue)

  return createPortal(
    <ul
      id="cb1-listbox"
      role="listbox"
      aria-label="States"
      css={styles.list(isDropDownOpen)}
      ref={listboxRef}
      style={listStyle}
    >
      {options
        .filter(
          (option) =>
            option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        )
        .map((option, index) => (
          <AutocompleteOption
            index={index}
            highlightedOptionIndex={highlightedOptionIndex}
            option={option}
            inputRef={inputRef}
            setInputValue={setInputValue}
            setIsDropDownOpen={setIsDropDownOpen}
            key={index}
          />
        ))}
    </ul>,
    document.body
  )
}
