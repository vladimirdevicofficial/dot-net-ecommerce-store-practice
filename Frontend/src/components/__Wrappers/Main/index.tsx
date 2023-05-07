/*
 * Copyright (c) 2023 Vladimir De Vico. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { forwardRef, LegacyRef, ReactNode } from 'react';

interface IMain {
  children: ReactNode
}

const Main = forwardRef(({ children }: IMain, ref) => {
  return (
    <main
      ref={ref as LegacyRef<HTMLElement> | undefined}
      aria-live="polite"
      aria-atomic={true}
      aria-busy={true}
    >
      {children}
    </main>
  );
});

Main.displayName = 'Main';

export default Main;
