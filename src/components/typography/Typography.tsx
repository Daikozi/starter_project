import { FC } from 'react'
import { TypographyProps } from './Typography.propTypes'
import * as styles from './Typography.styles'

/**
 * Use typography to present your design and content as clearly and efficiently as possible.
 */

export const Typography: FC<TypographyProps> = ({
  component,
  variant = 'body1',
  children,
}) => {
  switch (component || variant) {
    case 'h1':
      return <h1 css={styles.typography(variant)}>{children}</h1>
    case 'h2':
      return <h2 css={styles.typography(variant)}>{children}</h2>
    case 'h3':
      return <h3 css={styles.typography(variant)}>{children}</h3>
    case 'h4':
      return <h4 css={styles.typography(variant)}>{children}</h4>
    case 'h5':
      return <h5 css={styles.typography(variant)}>{children}</h5>
    case 'h6':
      return <h6 css={styles.typography(variant)}>{children}</h6>
    case 'body2':
      return <p css={styles.typography(variant)}>{children}</p>
    case 'button':
      return <p css={styles.typography(variant)}>{children}</p>
    case 'caption':
      return <p css={styles.typography(variant)}>{children}</p>
    case 'inherit':
      return <p css={styles.typography(variant)}>{children}</p>
    case 'overline':
      return <p css={styles.typography(variant)}>{children}</p>
    case 'subtitle1':
      return <p css={styles.typography(variant)}>{children}</p>
    case 'subtitle2':
      return <p css={styles.typography(variant)}>{children}</p>
    case 'div':
      return <div css={styles.typography(variant)}>{children}</div>
    case 'span':
      return <span css={styles.typography(variant)}>{children}</span>
    default:
      return <p css={styles.typography(variant)}>{children}</p>
  }
}
