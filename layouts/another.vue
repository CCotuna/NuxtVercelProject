<script setup></script>
<template>
    <div>
        <div>this is another layout</div>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Main</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>
        <div>end of another layout</div>
        <slot />
    </div>
</template>
<style scoped></style>