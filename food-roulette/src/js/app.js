document.addEventListener('DOMContentLoaded', () => {
    const foodInputsContainer = document.getElementById('food-inputs-container');
    const recommendButton = document.getElementById('recommend-button');
    const resultDisplay = document.getElementById('result-display');

    // 새로운 음식 입력 필드 생성 함수
    function createNewFoodInput() {
        const wrapper = document.createElement('div');
        wrapper.className = 'food-input-wrapper';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'food-input';
        input.placeholder = '음식을 입력하세요';
        
        wrapper.appendChild(input);
        foodInputsContainer.appendChild(wrapper);
        
        input.focus();
        return input;
    }

    // 엔터 키 이벤트 처리
    foodInputsContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.classList.contains('food-input')) {
            e.preventDefault();
            const currentInput = e.target;
            
            // 현재 input이 비어있지 않으면 새로운 input 생성
            if (currentInput.value.trim() !== '') {
                createNewFoodInput();
            }
        }
    });

    recommendButton.addEventListener('click', () => {
        // 모든 입력된 음식 수집
        const foods = Array.from(foodInputsContainer.querySelectorAll('.food-input'))
            .map(input => input.value.trim())
            .filter(food => food !== '');
        
        if (foods.length === 0) {
            resultDisplay.textContent = '음식을 입력해주세요!';
            return;
        }

        // 룰렛 애니메이션 효과
        let counter = 0;
        const maxIterations = 20;
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * foods.length);
            resultDisplay.textContent = foods[randomIndex];
            counter++;

            if (counter >= maxIterations) {
                clearInterval(interval);
                const finalIndex = Math.floor(Math.random() * foods.length);
                resultDisplay.textContent = `오늘의 추천 메뉴: ${foods[finalIndex]}`;
            }
        }, 100);
    });

    // 첫 번째 input에 포커스
    const firstInput = foodInputsContainer.querySelector('.food-input');
    if (firstInput) {
        firstInput.focus();
    }
});