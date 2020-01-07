import React, { useState } from 'react';
import { CounterService } from '../services/CounterService';
import { resolve } from 'inversify-react';
import { DIContext } from '../services/InversifyProvider';

const Counter: React.FunctionComponent = () => {
    const { container } = React.useContext(DIContext);
    let _counterService = (container ? container.get(CounterService) : undefined);
    const [count, setCount] = useState(0);

    return (
        <React.Fragment>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{count}</strong></p>

            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                    if (_counterService) {
                        _counterService.increment();
                        setCount(_counterService.count);
                    }
                }}>
                Increment
            </button>
        </React.Fragment>
    );
};

export default Counter;