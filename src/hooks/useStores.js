import React from 'react';
import { StoresContext } from '../stores/index.jsx';

export const useStores = () => React.useContext(StoresContext);
