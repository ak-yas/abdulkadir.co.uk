import "styled-components"
import theme from "./styles";

type ThemeInterface = typeof theme

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface (this is only necessary if you ur eslint complains. Since it should be and Interface and not a Type.) 
    interface DefaultTheme extends ThemeInterface {}
}