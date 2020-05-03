import React, {
    FC,
    useState,
    useRef,
    MutableRefObject,
    ComponentProps,
} from 'react';
import {
    string,
    array as arrayPropType,
    object as objectPropType,
    oneOfType,
} from 'prop-types';
import './index.css';

interface Accordion {
    children: React.ReactNode,
    accordionName?: String,
    customClassName?: String,
    icon?: String,
    iconStyle?: {},
}

const CustomAccordion:FC<Accordion > = (props: ComponentProps<any>) => {
    const {
        children,
        accordionName,
        customClassName,
        icon,
        iconStyle,
      } = props;

  const [expand, setExpand] = useState(false);
  const accordionRef: MutableRefObject<any> = useRef(null);

  return (
    <div className="accordion-parent">
      <section
        onClick={() => setExpand(prevState => !prevState)}
        className={`trigger-container ${expand ? 'active-trigger' : ''} ${customClassName}`.trim()}>
        <h3>{accordionName}</h3>
        <button type="button">
          {icon ? <img src={icon} alt="icon" style={iconStyle} /> : (
          <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> 
              <path d="M0.292892 1.70711C-0.0976318 1.31658 -0.0976318 0.683418 0.292892 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.08568 6.67147 8.09893 7.28106 7.73715 7.67572L2.23715 13.6757C1.86396 14.0828 1.23139 14.1103 0.824274 13.7372C0.417155 13.364 0.389653 12.7314 0.762845 12.3243L5.61586 7.03008L0.292892 1.70711Z" />
         </svg>)}
        </button>
      </section>
      <section
        ref={accordionRef}
        className={`accordion ${expand ? 'active-accordion' : ''}`.trim()}
        style={{
          maxHeight: expand ?
            `${accordionRef.current.scrollHeight + 40}px` :
            '0px',
        }}
      >
        {children}
      </section>

    </div>
  );
};

CustomAccordion.propTypes = {
  children: oneOfType([ objectPropType, arrayPropType]).isRequired,
  accordionName: string,
  customClassName: string,
  icon: string,
  iconStyle: objectPropType,
};

CustomAccordion.defaultProps = {
  accordionName: '',
  customClassName: '',
  icon: '',
  iconStyle: {},
};

export default CustomAccordion;
