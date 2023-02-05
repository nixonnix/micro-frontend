import { getOrLoadRemote } from './getOrLoadRemote';
import {getContextDetails} from './getContextDetails';

// export const loadComponent = (remote, sharedScope, module, url) => {
export const loadComponent = ({context, type}) => {
  return async () => {
    const {remote, sharedScope = 'default', url, module} = await getContextDetails(type, context);
    await getOrLoadRemote(remote, sharedScope, url);
    const container = window[remote];
    const factory = await container.get(module);
    const Module = factory();
    return Module;
  };
};
