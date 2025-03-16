import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

Object.assign(global, { TextDecoder, TextEncoder });
