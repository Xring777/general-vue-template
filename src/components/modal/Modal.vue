<!-- <template>
    <div class="
        justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        outline-none
        focus:outline-none
        bg-neutral-800/70
        ">
        <div @click="$emit('onClose')" class="fixed inset-0" />
        <div class="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
            <div class="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex
                        flex-col w-full bg-white outline-none focus:outline-none">
                <div class="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                    <div class="text-lg font-semibold">{{ title }}</div>
                    <button @click="$emit('onClose')" class="p-1 border-0 hover:opacity-70 transition absolute
                                right-5">
                        关闭
                    </button>
                </div>
                <div class="relative p-6 flex-auto">
                    <slot name="body"></slot>
                </div>
                <div class="flex flex-col gap-2 p-6">
                    <div class="flex flex-row items-center gap-4 w-full">
                        <Button v-if="secondaryActionLabel" outline :disabled="!!disabled" :label="secondaryActionLabel"
                            @on-click="$emit('secondaryAction')" />
                        <Button :disabled="!!disabled" :label="actionLabel" @on-click="$emit('onSubmit')" />
                    </div>
                    <slot name="footer"></slot>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../button/Button.vue';

interface ModalProps {
    title?: string,
    actionLabel: string,
    disabled?: boolean,
    secondaryActionLabel?: string
}
interface ModalEmits {
    (event: 'onClose'): void,
    (event: 'onSubmit'): void,
    (event: 'secondaryAction'): void,
}

defineProps<ModalProps>()
defineEmits<ModalEmits>()

</script>

<style scoped></style> -->
