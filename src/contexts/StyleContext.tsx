import React from "react";

const StyleContext = React.createContext<any>(null);

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
