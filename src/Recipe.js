import React from 'react';

const Recipe = () => {
    return (
        <div>
            <div>
                <h3>Plain Chicken</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time</span>
                <span>1:45</span>
            </div>
            <div>
                <span>Servings</span>
                <span>3</span>
            </div>
            <div>
                <span>Instruction</span>
                <div>
                    1.Put salt on Chicken
                    2.put chicken in oven
                    3.Eat chicken
                </div>
            </div>
            
        </div>
    );
}

export default Recipe;
