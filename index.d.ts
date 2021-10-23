declare module 'tio.js' {
  namespace tio {
    export interface TioResponse {
      /** The code output. */
      output: string;
      /** The language used. */
      language: string;
      /** A boolean to check if the request timed out. */
      timedOut: boolean;
      /** How long the code runs real time. */
      realTime: number;
      /** How long the code runs user time. */
      userTime: number;
      /** How long the code runs system time. */
      sysTime: number;
      /** The code's CPU share. */
      CPUshare: number;
      /** The script's exit code. */
      exitCode: number;
    }

    /**
     * Sets the default language.
     * @param language Language to use as default.
     */
    export function setDefaultLanguage(language: string): Promise<void>;

    /**
     * Returns the default language to use if language parameter is not provided.
     * @returns {string}
     */
    export function getDefaultLanguage(): string;

    /**
     * Fetches all the available languages.
     * @returns The list of available languages.
     */
    export function languages(): Promise<string[]>;

    /**
     * Returns the default timeout used by the library.
     * @returns A number (in ms) or null if not set.
     */
    export function getDefaultTimeout(): number | null;

    /**
     * Sets the default timeout for the library.
     * @param timeout The new default timeout (in ms) or null to disable it.
     */
    export function setDefaultTimeout(timeout: number | null): void;

    export const version: string;
  }

  /**
   * Evaluates code through the TryItOnline API.
   * @param code The code to run.
   * @param language The programming language to use. Uses the default language if not specified.
   * @param timeout After how much time should the code execution timeout. (in ms)
   * @returns The code response.
   */
  function tio(code: string, language?: string, timeout?: number): Promise<tio.TioResponse>;

  export = tio;
}
