import { configure } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    // @ts-ignore
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}
