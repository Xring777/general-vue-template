<!-- <template>
    <Modal title="test" actionLabel="test" secondaryActionLabel="cancel" @secondary-action="isOpen = !isOpen"
        @on-close="isOpen = !isOpen">
        <template #body>
            <div class="flex flex-col gap-4">
                <Heading title="Welcome back" subTitle="Login to your account!" />
                <Input label="Email" :disabled="isLoading" v-model="email" required />
                <Input type="password" label="Password" :disabled="isLoading" v-model="password" required />
            </div>
        </template>
        <template #footer>
            <div class="flex flex-col gap-4 mt-3">
                <hr />
                <Button outline label="Continue With Google" @onClick="onSubmit" />
                <Button outline label="Continue With Github" icon={AiFillGithub} @onClick="onSubmit" />
                <div class="text-neutral-500 text-center mt-4 font-light">
                    <div class="flex flex-row justify-center items-center gap-2">
                        <div>First time use Airbnb?</div>
                        <div @click="toggle" class="text-neutral-800 cursor-pointer hover:underline">Create
                            an account
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../button/Button.vue';
import Heading from '../heading/Heading.vue';
import Input from '../input/Input.vue';
import Modal from './Modal.vue';

const isOpen = ref(false)
const isLoading = ref(false)
const email = ref('')
const password = ref('')

const onSubmit = () => {
    isLoading.value = true
    console.log(email.value, password);
}

const toggle = () => {
    console.log('toggle');

}
</script>

<style scoped></style> -->
