<template>
    <div class="header">
        <NuxtLink to="/">
            <IconLogo />
        </NuxtLink>
        <div class="header__content">
            <div class="header__menu">
                <NuxtLink to="/catalog">Магазин</NuxtLink>
                <NuxtLink to="/about">О нас</NuxtLink>
            </div>
            <div class="header__hr"></div>
            <div class="header__icons">
                <NuxtLink to="#">
                    <Icon name="icons:search" size="21px" />
                </NuxtLink>
                <NuxtLink to="/cart">
                    <Icon name="icons:cart" size="21px" />
                </NuxtLink>
                <NuxtLink to="/favorites">
                    <Icon name="icons:favorite" size="21px" />
                </NuxtLink>
                <NuxtLink to="/account">
                    <Icon name="icons:user" size="21px" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    margin: 0 auto;
    max-width: 1248px;
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    border-bottom: 1px solid var(--color-gray);
    padding: 0 24px;
    width: 100%;
    box-sizing: border-box;
}

.header__content {
    display: flex;
    gap: 60px;
    align-items: center;
}

.header__menu {
    display: flex;
    gap: 60px;
    align-items: center;
}

.header__menu a {
    font-size: 16px;
    line-height: 27px;
    color: var(--color-black);
    text-decoration: none;
    padding-bottom: 48px;
    white-space: nowrap;
}

.header__menu a:hover {
    color: var(--color-dark-gray);
}

.header__menu a.router-link-active {
    border-bottom: 1px solid var(--color-black);
}

.header__icons {
    display: flex;
    gap: 40px;
    align-items: center;
}

.header__icons a {
    padding-bottom: 48px;
}

.header__icons a.router-link-active {
    border-bottom: 1px solid var(--color-black);
}

.header__hr {
    border-left: 1px solid var(--color-dark-gray);
    height: 17px;
    align-self: flex-start;
    margin-top: 4px;
}

/* Адаптивность */
@media (max-width: 1024px) {
    .header {
        max-width: 90%;
        padding: 0 20px;
    }
    
    .header__content {
        gap: 40px;
    }
    
    .header__menu {
        gap: 40px;
    }
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin-top: 30px;
        padding: 0 16px;
    }
    
    .header__content {
        flex-direction: column;
        gap: 30px;
        width: 100%;
        align-items: center;
    }
    
    .header__menu {
        flex-direction: column;
        gap: 20px;
        width: 100%;
        align-items: center;
    }
    
    .header__menu a {
        padding-bottom: 20px;
        width: 100%;
        text-align: center;
    }
    
    .header__hr {
        display: none;
    }
    
    .header__icons {
        gap: 30px;
        padding-bottom: 20px;
        width: 100%;
        justify-content: center;
    }
    
    .header__icons a {
        padding-bottom: 20px;
    }
}

@media (max-width: 480px) {
    .header {
        margin-top: 20px;
        gap: 20px;
    }
    
    .header__content {
        gap: 20px;
    }
    
    .header__menu {
        gap: 15px;
    }
    
    .header__icons {
        gap: 20px;
    }
}
</style>