import React, { useCallback, useEffect, useState } from 'react'

const useTrackScreenWidth = (givenWidth: number) => {
  const [status, setStatus] = useState<boolean>(false)


  const handler = useCallback(
    () => setStatus(window.innerWidth <= givenWidth),
    [],
  )


  useEffect(() => {
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])


  return status

}

export default useTrackScreenWidth
