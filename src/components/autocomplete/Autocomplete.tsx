import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { Typography } from '../typography'
import { AutocompleteProps } from './Autcomplete.propTypes'
import * as styles from './Autocomplete.styles'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
// import CloseIcon from '@mui/icons-material/Close'
import { AutcompleteList } from './AutcompleteList'

export const Autocomplete: FC<AutocompleteProps> = ({ options, label }) => {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [highlightedOptionIndex, setHighlightedOptionIndex] =
    useState<number>(-1)

  const inputRef = useRef<HTMLInputElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  const listboxRef = useRef<HTMLUListElement>(null)

  const handleInputFocus = () => {
    inputRef.current?.focus()
    setIsInputFocused(true)
    setIsDropDownOpen(true)
  }

  const handleClickOutside = (event: MouseEvent) => {
    event.stopPropagation()
    if (
      groupRef.current &&
      listboxRef.current &&
      !groupRef.current.contains(event.target as Node) &&
      !listboxRef.current.contains(event.target as Node)
    ) {
      setIsInputFocused(false)
      setIsDropDownOpen(false)
    }
  }

  const handleKeyboard = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      setIsDropDownOpen(true)
      highlightedOptionIndex >= 0 &&
      highlightedOptionIndex <
        options.filter(
          (option) =>
            option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        ).length -
          1
        ? setHighlightedOptionIndex(highlightedOptionIndex + 1)
        : setHighlightedOptionIndex(0)
    }
    if (event.key === 'ArrowUp') {
      setIsDropDownOpen(true)
      highlightedOptionIndex > 0 &&
      highlightedOptionIndex <=
        options.filter(
          (option) =>
            option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        ).length -
          1
        ? setHighlightedOptionIndex(highlightedOptionIndex - 1)
        : setHighlightedOptionIndex(
            options.filter(
              (option) =>
                option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
            ).length - 1
          )
    }
    if (event.key === 'Enter') {
      if (highlightedOptionIndex >= 0) {
        setInputValue(
          options.filter(
            (option) =>
              option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
          )[highlightedOptionIndex]
        )
        setIsDropDownOpen(false)
        setHighlightedOptionIndex(-1)
      }
    }
    if (event.key === 'Escape') {
      setInputValue('')
      setIsDropDownOpen(false)
      setHighlightedOptionIndex(-1)
    }
    if (event.key === 'Tab') {
      setIsInputFocused(false)
      setIsDropDownOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div css={styles.comboboxList}>
      <label
        css={styles.label(isInputFocused, !!inputValue)}
        htmlFor="cb1-input"
      >
        <Typography>{label}</Typography>
      </label>
      <div
        css={styles.group(isInputFocused)}
        onClickCapture={() => handleInputFocus()}
        ref={groupRef}
      >
        <input
          autoComplete="off"
          id="cb1-input"
          css={styles.input}
          className="cb_edit"
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isInputFocused}
          aria-haspopup
          aria-controls="cb1-listbox"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            setIsDropDownOpen(true)
          }}
          onKeyDown={(event) => handleKeyboard(event)}
          onFocus={() => setIsInputFocused(true)}
        />
        {/* {inputValue && !isDropDownOpen && (
          <button
            css={styles.button(isInputFocused)}
            id="cb1-button"
            tabIndex={-1}
            aria-label="Open"
            onClickCapture={(e) => {
              e.stopPropagation()
              setInputValue('')
              setIsDropDownOpen(false)
            }}
          >
            <CloseIcon />
          </button>
        )} */}
        <button
          css={styles.button(isInputFocused)}
          id="cb1-button"
          tabIndex={-1}
          aria-label="Open"
        >
          {isDropDownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </button>
      </div>
      <AutcompleteList
        isDropDownOpen={isDropDownOpen}
        listboxRef={listboxRef}
        options={options}
        highlightedOptionIndex={highlightedOptionIndex}
        inputRef={inputRef}
        setInputValue={setInputValue}
        inputValue={inputValue}
        setIsDropDownOpen={setIsDropDownOpen}
        groupRef={groupRef}
      />
    </div>
  )
}
