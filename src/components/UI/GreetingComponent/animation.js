import { keyframes } from 'styled-components'

export const translateRight = keyframes`
   from {
        transform: translateX(500px);
        opacity: 0;
    }

    to {
        transform: translateX(0px);
        opacity: 1;
    }
`

export const translatedown = keyframes`
   from {
        transform: translateY(500px);
        opacity: 0;
    }

    to {
        transform: translateY(0px);
        opacity: 1;
    }
`
