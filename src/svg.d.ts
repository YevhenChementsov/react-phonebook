declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement> & { width?: string; height?: string }
  >;
  export default ReactComponent;
}
