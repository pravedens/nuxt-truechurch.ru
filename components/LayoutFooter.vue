<template>
    <div class="footer">
        <hr />
        <div class="footer__top">
            <ul>
                <li><NuxtLink to="#">Контакты</NuxtLink></li>
                <li><NuxtLink to="#">Условия покупки</NuxtLink></li>
                <li><NuxtLink to="#">Доставка и возврат</NuxtLink></li>
            </ul>
            <div class="footer__form">
                <InputField placeholder="Введите email" variant="black" />
                <button class="footer__subscribe">
                    <Icon name="icons:arrow-right" size="30px" />
                </button>
            </div>
        </div>
        <div class="footer__buttom">
            <div>{{ new Date().getFullYear() }} Shoppe</div>
            <div class="footer__social">
                <NuxtLink to="#">
                    <Icon name="icons:li" size="30px" />
                </NuxtLink>
                <NuxtLink to="#">
                    <Icon name="icons:fb" size="30px" />
                </NuxtLink>
                <NuxtLink to="#">
                    <Icon name="icons:in" size="30px" />
                </NuxtLink>
                <NuxtLink to="#">
                    <Icon name="icons:tw" size="30px" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    margin: 0 auto;
    max-width: 1248px;
    padding: 40px 24px;
    width: 100%;
    box-sizing: border-box;
}

hr {
    border: none;
    height: 1px;
    background-color: var(--color-light-gray);
    margin: 0 0 40px 0;
    width: 100%;
}

.footer__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
    gap: 40px;
    width: 100%;
}

.footer__top ul {
    list-style: none;
    display: flex;
    padding: 0;
    gap: 30px;
    flex-wrap: wrap;
    margin: 0;
}

.footer__top ul a {
    font-size: 16px;
    font-style: normal;
    text-transform: uppercase;
    color: var(--color-dark-gray);
    text-decoration: none;
    transition: color 0.2s ease;
    white-space: nowrap;
}

.footer__top ul a:hover {
    color: var(--color-black);
}

.footer__form {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 380px;
}

.footer__form :deep(.input) {
    width: 100%;
    padding-right: 50px;
    box-sizing: border-box;
}

.footer__subscribe {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    transition: color 0.2s ease;
    color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.footer__subscribe:hover {
    color: var(--color-dark-gray);
}

.footer__buttom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
}

.footer__buttom > div:first-child {
    font-size: 16px;
    color: var(--color-dark-gray);
}

.footer__social {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.footer__social a {
    color: var(--color-dark-gray);
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer__social a:hover {
    color: var(--color-black);
}

/* Адаптивность */
@media (max-width: 768px) {
    .footer {
        padding: 40px 20px;
    }
    
    .footer__top {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }
    
    .footer__top ul {
        flex-direction: column;
        gap: 15px;
    }
    
    .footer__form {
        max-width: 100%;
    }
    
    .footer__buttom {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }
    
    .footer__social {
        justify-content: flex-start;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .footer {
        max-width: 90%;
    }
    
    .footer__top {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .footer__form {
        max-width: 100%;
    }
}
</style>