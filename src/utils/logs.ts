export interface logCaughtErrorParams {
  fileName?: string
  className?: string
  functionName?: string
  line?: string | number
  error: any

}

export interface logInfoParams {
  fileName?: string
  className?: string
  functionName?: string
  line?: string | number
  message: any
}


export const logCaughtError = ({
                                 fileName,
                                 className,
                                 functionName,
                                 line,
                                 error,
                               }: logCaughtErrorParams) => {
  console.error("\n\n____DEV CAUGHT ERROR____\n\n", JSON.stringify({
    fileName,
    className,
    functionName,
    line,
    error: error.message,
  }, null, 2))
  console.log(error.message)
  /// Send error to bug tracker
}

export const logInfo = ({
                          fileName,
                          className,
                          functionName,
                          line,
                          message,
                        }: logInfoParams) => {

  const prettyJson = JSON.stringify({
    "⏩ File----->": fileName,
    "⏩ Class---->": className,
    "⏩ Function->": functionName,
    "⏩ Line----->": line,
    "⏩ Message-->": message,
  }, null, 4);


  console.log("\n\n________DEV INFO PRINT START________\n\n", prettyJson, "\n\n________DEV INFO PRINT END________\n\n",)
  console.log(message)
  /// Send error to bug tracker
}

export function makeId(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}
