import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import useSignup from "./useSignup"
import signupImage from "@/ui/assets/signup-image.svg"

export default function SignUp() {
  const { errors, goToLogin, setFormsField, submitSignup } = useSignup()
  
  return (
    <div className="py-8 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="hidden md:flex flex-1 justify-center">
          <img
            src={signupImage}
            alt="Ilustração"
            className="max-w-md"
          />
        </div>

        {/* Formulário */}
        <div className="bg-card rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-lg font-bold text-foreground">Crie sua conta</h2>
          <p className="text-main-green font-black mb-4 text-lg">SPENDO</p>

          <form onSubmit={(event) => submitSignup(event)}>
            <section className="flex flex-col gap-4 pb-6">
                <div>
                    <Input
                        onChange={(event) => setFormsField(event)} 
                        placeholder="Nome"
                        type="text"
                        name="name"
                    />
                    {errors.name &&                     
                        <p className="text-sm text-destructive py-1">{errors.name}</p>
                    }
                </div>

                <div>
                    <Input 
                        onChange={(event) => setFormsField(event)} 
                        placeholder="Email"
                        type="email"
                        name="email"
                    />
                    {errors.email &&                     
                        <p className="text-sm text-destructive py-1">{errors.email}</p>
                    }
                </div>

                <div>
                    <Input
                        onChange={(event) => setFormsField(event)} 
                        placeholder="Senha"
                        type="password"
                        name="password"
                    />
                    {errors.password &&                     
                        <p className="text-sm text-destructive py-1">{errors.password}</p>
                    }
                </div>

                <div>
                    <Input
                        onChange={(event) => setFormsField(event)} 
                        placeholder="Confirmação de senha"
                        type="password"
                        name="passwordConfirmation"
                    />
                    {errors.passwordConfirmation &&                     
                        <p className="text-sm text-destructive py-1">{errors.passwordConfirmation}</p>
                    }
                </div>

                {errors.user &&                     
                  <p className="text-sm text-destructive py-1">{errors.user}</p>
                }
            </section>

            <Button 
                type="submit"
                className="w-full"
            >
                Cadastrar-se
            </Button>
          </form>

          <p className="text-sm text-center p-2">
            Já possui conta?
            <Button
                variant="link"
                onClick={() => goToLogin()}
            >
                Faça login aqui!
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}
