import { imagePlugin } from "@webiny/app/plugins";
import pageBuilderPlugins from "@webiny/app-page-builder/site/plugins";
import pageBuilderTheme from "@webiny/app-page-builder-theme";

const plugins = [imagePlugin, pageBuilderPlugins, pageBuilderTheme()];

export default plugins;
